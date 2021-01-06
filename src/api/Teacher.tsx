import { Course } from "./Course";
import { DatabaseHandler } from "./DatabaseHandler";
import { User } from "./User";

export class Teacher extends User{

    private coursesGiven = new Array<Course>();

    public teachCourse(Database: DatabaseHandler,course:Course){
        Database.addTeacherToCourse(this,course);
    }

    public getCoursesGiven(): Array<Course>{
        return this.coursesGiven;
    }

    public addCoursesGiven(course:Course):void{
        this.coursesGiven.push(course);
    }

}