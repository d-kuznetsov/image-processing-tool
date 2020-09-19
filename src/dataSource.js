import lowdb from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync";

const adapter = new FileAsync("./upload/data.json");
const dataSourcePreparing = lowdb(adapter);

export function getDataSource() {
  return dataSourcePreparing;
}
