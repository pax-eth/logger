

	#include <curses.h>
	#include <string.h>
	#include <stdlib.h>
	
	WINDOW *title;
	#define NEW_COLOR 1
	#define RED 200
	#define GREEN 500
	#define BLUE 1000

	void center(int row, char *string);
	void bomb(char *msg);

	int main()
	{

		char login[2][20] = {" Customs ", " Enter "};
		

		initscr();
		curs_set(0);

		if(!has_colors())
		bomb("Terminal cannot do colors\n");

		if(start_color() != OK)
		bomb("Unable to start colors.\n");
		
		start_color();

		title = newwin(10,45,4,50);

		init_color(NEW_COLOR,RED,GREEN,BLUE);
		init_pair(1,NEW_COLOR,COLOR_BLACK);

		wbkgd(title, COLOR_PAIR(1));

		attron(A_BOLD);
		center(2, "LOGGER");
		attroff(A_BOLD);
		center(4, "v1 alpha | 2016");
		center(5, "Made by Physes");
		center(6, "Based on the \"Getting Things Done\"");
		center(7, "methodology by David Allen.");
		box(title,0,0);
		
		

		touchwin(title);			/* force update */
		wrefresh(title);
		getchar();				/* wait for key press */
		endwin();
		return 0;

	}



	void center(int row, char *string)
{
	int len,indent,y,width;

	getmaxyx(title,y,width);	/* get screen width */

	len = strlen(string);		/* get title's length */
	indent = width - len;		/* subtract it from screen width */
	indent /= 2;			/* divide result into two */

	mvwaddstr(title, row,indent,string);
	refresh();
}

	void bomb(char *msg)
{
	endwin();
	puts(msg);
	exit(1);
}
