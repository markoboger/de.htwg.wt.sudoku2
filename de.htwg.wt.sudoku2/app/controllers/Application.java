package controllers;

import de.htwg.sudoku.Sudoku;
import de.htwg.sudoku.aview.StatusMessage;
import de.htwg.sudoku.aview.tui.TextUI;
import de.htwg.sudoku.controller.GameStatus;
import de.htwg.sudoku.controller.ISudokuController;
import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {
	
	static ISudokuController controller = Sudoku.getInstance().getController();


    public Result index() {
    	return ok(index.render("Welcome to Sudoku"));
    }
    
    public Result sudoku(String command) {
    	TextUI tui=Sudoku.getInstance().getTui();
    	tui.processInputLine(command);   	
    	GameStatus status = Sudoku.getInstance().getController().getStatus();
    	String statusMessage = StatusMessage.text.get(status);
        return ok(sudoku.render(controller, statusMessage ));
    }
    
    public Result highlight(int n) {
    	ISudokuController controller=Sudoku.getInstance().getController();
    	controller.highlight(n);  	
    	GameStatus status = Sudoku.getInstance().getController().getStatus();
    	String statusMessage = StatusMessage.text.get(status);
        return ok(sudoku.render(controller, statusMessage ));
    }

}
