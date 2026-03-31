declare module "@svar-ui/react-gantt" {
  export const Gantt: any;
  export const Willow: any;
  export interface ITask {
    id: string | number;
    text: string;
    start_date?: string | Date;
    end_date?: string | Date;
    duration?: number;
    progress?: number;
    parent?: string | number;
    [key: string]: any;
  }
}
