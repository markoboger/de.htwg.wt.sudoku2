package controllers;

import de.htwg.sudoku.Sudoku;
import de.htwg.sudoku.aview.tui.TextUI;
import de.htwg.sudoku.controller.ISudokuController;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;
import views.html.sudoku;

public class Application extends Controller {
	
	static ISudokuController controller = Sudoku.getInstance().getController();
	TextUI tui=Sudoku.getInstance().getTui();

    public Result index() {
    	return ok(index.render("Welcome to Sudoku"));
    }
    
    public Result sudoku(String command) {
    	tui.processInputLine(command);   	
        return ok(sudoku.render(controller));
    }
    
    public Result getSudokuAsJson() {
    	controller.toJson();
    	return ok(controller.toJson());
    }
    
    public Result getJson(String command) {
    	tui.processInputLine(command); 
    	controller.toJson();
    	return ok(controller.toJson());
    }
    
    public Result showCandidates(int row, int column) {
    	controller.showCandidates(row, column);
    	return ok(controller.toJson());
    }
    
    public Result setValue(int row, int column, int value) {
    	controller.setValue(row, column, value);
    	return ok(controller.toJson());
    }
    
    

}
