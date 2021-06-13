import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	randomText: string = lorem.sentence();
	userText: string = "";
	correctText: boolean = false;

	onChangeText(value: string) {
		this.userText = value;
	}

	changeColor(randomLetter: string, enteredLetter: string) {
		if (!enteredLetter) {
			return "pending";
		}

		return randomLetter === enteredLetter ? "correct" : "incorrect";
	}
}
