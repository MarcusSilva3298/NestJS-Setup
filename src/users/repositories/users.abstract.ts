/*
  Declare all your database related functions/methods here
  Then they should be implemented in the Repository it self
*/

export abstract class IUsersRepository {
  abstract create(): Promise<any>

  abstract update(): Promise<any>

  abstract delete(): Promise<any>

  abstract find(): Promise<any>

  abstract list(): Promise<any>
}
