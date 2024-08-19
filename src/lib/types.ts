export default interface KanbanData {
  name: string;
  id: string;
  columns: {
    name: string;
    id: string;
    tasks: {
      name: string;
      id: string;
    }[];
  }[];
}
