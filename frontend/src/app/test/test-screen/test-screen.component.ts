import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersListService } from "src/app/services/users-list.service";
import { RegisterServiceService } from "src/app/services/register-service.service";
import { TestsService } from "src/app/services/tests.service";
import { DomSanitizer } from "@angular/platform-browser";
import sdk from "@stackblitz/sdk";
import { SnackbarComponent } from "src/app/utils/snackbar/snackbar.component";
import { DialogBoxComponent } from "src/app/utils/dialog-box/dialog-box.component";

@Component({
  selector: "app-test-screen",
  templateUrl: "./test-screen.component.html",
  styleUrls: ["./test-screen.component.css"]
})
export class TestScreenComponent implements OnInit {
  data: any;
  questions = [];
  projectSetup: any;
  vm: any;
  codeResponsesArray = [];
  submitTestEnabled = false;
  responsesArray = [];
  hideItems = true;
  isTestCompleted = false;
  isCreditsPresent = false;
  credits: number;
  testComments: string;
  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private usersListService: UsersListService,
    private registerServiceService: RegisterServiceService,
    private testsService: TestsService,
    private snackbarComponent: SnackbarComponent,
    private router: Router,
    private dialogBox: DialogBoxComponent
  ) {
    this.route.queryParamMap.subscribe(res => {
      this.data = res;
      if (res["params"]["mode"] === "candidate") {
        if (res["params"]["testStatus"] == "started") {
          this.hideItems = false;
          this.router.navigate(["/test"], {
            queryParams: {
              testStatus: "started",
              token: res["params"]["token"],
              mode: res["params"]["mode"],
              id: res["params"]["id"]
            }
          });
        } else {
          localStorage.setItem("mode", res["params"]["mode"]);
          this.router.navigate(["/test/candidate-test-login"], {
            queryParams: {
              mode: res["params"]["mode"],
              id: res["params"]["id"],
              token: res["params"]["token"]
            },
            skipLocationChange: true
          });
        }
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      // Fecthes the user credits if avaialable
      this.testsService
        .fetchUserCreditsById({ id: res["id"] })
        .subscribe(res => {
          if (res["data"]["result"].length == 0) {
            this.isCreditsPresent = false;
          } else {
            this.isCreditsPresent = true;
            this.credits = res["data"]["result"][0]["testCredits"];
            this.testComments = res["data"]["result"][0]["testComments"];
          }
        });

      // Fetches the code responses submitted by the candidate if available
      this.usersListService.getUserByID({ id: res["id"] }).subscribe(res => {
        this.testsService
          .fetchResponsesById({ id: res["data"]["user"]["_id"] })
          .subscribe(res => {
            if (res["data"]["responseData"][0] == undefined) {
              this.isTestCompleted = true;
              if (res["mode"] != "candidate") {
              }
            } else {
              const tempResArray = [
                ...res["data"]["responseData"][0]["codeResponses"]
              ];
              tempResArray.map(item => {
                this.codeResponsesArray.push(JSON.parse(item));
              });
            }
          });
        this.data = { ...res["data"]["user"] };
        this.questions = this.data["questions"];
      });
    });
  }

  embedProject(index, setup) {
    let projectSetup = { ...setup };
    const morphedFilesObject = {};
    Object.keys(projectSetup["files"]).map(item => {
      const filesKey = item.split("/").join(".");
      morphedFilesObject[filesKey] = projectSetup["files"][item];
    });
    projectSetup["files"] = morphedFilesObject;
    if (this.codeResponsesArray[index] != undefined) {
      projectSetup["files"] = this.codeResponsesArray[index];
    } else {
      projectSetup = projectSetup;
    }
    sdk
      .embedProject(index.toString(), projectSetup, {
        openFile: "index.html",
        height: 700
      })
      .then(vm => {
        this.vm = vm;
      });
  }

  tabLabel(index) {
    return `Question no.${index + 1}`;
  }

  getEmbedUrl(link) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  submitResponse(index) {
    this.vm.getFsSnapshot().then(result => {
      const data = JSON.stringify(result);
      this.codeResponsesArray.splice(index, 1, data);
      this.snackbarComponent.open("Response Recorded", "", 3);
    });
  }

  submitTest() {
    const formData = {};
    formData["id"] = this.data["_id"];
    formData["codeResponses"] = this.codeResponsesArray;
    this.testsService.saveTestResponse(formData).subscribe(res => {
      if (res["status"]) {
        setTimeout(() => {
          this.router.navigate(["/test-completed"]);
        }, 1500);
      }
    });
  }

  submitScore(data) {
    this.dialogBox.openCreditsScreen(data._id);
  }
}

/* @author Sai_Krishna
 * Default_Test_Links_Object
 * Alter the files object in the project setup object for differant test for loading default setups
 * API-Link :- "<api-domain>/test/addTestLinks" (Important, as the project setups for new test languages can only be added through using the api)
 */
// BODY:-
// ReactJS:- {
//   "testValue": 2,
//   "questionsArray": {
//       "questions": [
//           "Test ReactJS Question 1",
//           "Test ReactJS Question 2",
//           "Test ReactJS Question 3"
//       ],
//       "projectSetup": {
//           "files": {
//               "Hello/js": "import React from 'react';export default ({ name }) => <h1>Hello {name}!</h1>;",
//               "index/html": "<div id='root'></div>",
//               "index/js": "import React, { Component } from 'react';import { render } from 'react-dom';import Hello from './Hello';import './style.css';class App extends Component {constructor() {super();  this.state = {   name: 'React'    };}render() {return (<div><Hello name={this.state.name} /><p>Start editing to see some magic happen :)</p></div>);}}render(<App />, document.getElementById('root'));",
//               "style/css": "h1, p {  font-family: Lato;}"
//           },
//           "title": "ReactJS Project",
//           "description": "ReactJS Test project",
//           "template": "create-react-app",
//           "settings": {
//               "compile": {
//                   "trigger": "keystroke",
//                   "clearConsole": false
//               }
//           }
//       }
//   }
// }
// AngularJS: {
//   "testValue": 3,
//   "questionsArray": {
//       "questions": [
//           "Test Angular Question 1",
//           "Test Angular Question 2",
//           "Test Angular Question 3"
//       ],
//       "projectSetup": {
//           "files": {
//               "main/ts": "import { enableProdMode } from '@angular/core';import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';import { AppModule } from './app.module';platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {if (window['ngRef']) {window['ngRef'].destroy();}window['ngRef'] = ref;}).catch(err => console.error(err));",
//               "index/html": "<p>Start editing to see some magic happen :)</p>",
//               "app/module/ts" : "import { NgModule } from '@angular/core';import { BrowserModule } from '@angular/platform-browser';import{FormsModule } from '@angular/forms';@NgModule({imports: [BrowserModule, FormsModule],declarations: [],bootstrap: []})export class AppModule {}"
//           },
//           "title": "AngularJS Project",
//           "description": "AngularJS Test project",
//           "template": "angular-cli",
//           "settings": {
//               "compile": {
//                   "trigger": "keystroke",
//                   "clearConsole": false
//               }
//           }
//       }
//   }
// }
