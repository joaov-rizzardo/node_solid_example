interface UserProps {
  id: number
  email: string
  name: string
  age: number
  password: string
}

export class User {
  public readonly id: number
  private email: string
  private name: string
  private age: number
  private password: string

  constructor(props: UserProps) {
    this.id = props.id
    this.email = props.email
    this.name = props.name
    this.age = props.age
    this.password = props.password
  }

  public convertToObject() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      age: this.age,
      password: this.password
    }
  }
}
