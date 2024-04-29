import { PersonModel } from "../PersonModel";

export interface PersonBody extends Omit<PersonModel, 'id'>{

}