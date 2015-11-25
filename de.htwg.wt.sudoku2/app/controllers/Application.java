package controllers;

import de.htwg.sudoku.Sudoku;
import de.htwg.sudoku.aview.tui.TextUI;
import de.htwg.sudoku.controller.ISudokuController;
import play.mvc.*;
import play.api.libs.json.*;

import views.html.*;

public class Application extends Controller {
	
	static ISudokuController controller = Sudoku.getInstance().getController();


    public Result index() {
    	return ok(index.render("Welcome to Sudoku"));
    }
    
    public Result sudoku(String command) {
    	TextUI tui=Sudoku.getInstance().getTui();
    	tui.processInputLine(command);   	
        return ok(sudoku.render(controller));
    }
    
    public Result showCandidates(int row, int column) {
    	controller.showCandidates(row, column);
    	JsValue sudoku = Json.parse(controller.toJson());
    	return ok(sudoku);

    }
    
    public Result setValue(int row, int column, int value) {
    	controller.setValue(row, column, value);
    	JsValue sudoku = Json.parse(controller.toJson());
    	return ok(sudoku);
    }
    
    

}
