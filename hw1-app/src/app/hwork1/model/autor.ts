export interface IAutor {
  id: string;
  name: string;
}

export class Autor implements IAutor {
  constructor(public id: string, public name: string) {
  }

}


export interface ICourseAuthor {
  id: number;
  name: string;
  lastName: string;
}
