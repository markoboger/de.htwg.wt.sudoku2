package controllers;

import de.htwg.sudoku.Sudoku;
import de.htwg.sudoku.aview.tui.TextUI;
import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Result index() {
    	return ok(index.render("Welcome to Sudoku"));
    }
    
    public Result sudoku(String command) {
    	TextUI tui=Sudoku.getInstance().getTui();
    	tui.processInputLine(command);   	
        return ok(sudoku.render(tui.toHtml()));
    }

}
