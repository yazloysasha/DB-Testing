export interface ICommand {
  name: string;
  args: {
    [Property in string]: string;
  };
}
