export type TabsType = "All" | "Completed" | "Pending";

export type TaskType = {
  type: "Work" | "Personal" | "Urgent";
  status: "Completed" | "Pending";
  label: string;
  description: string;
};
