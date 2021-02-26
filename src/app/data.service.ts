export class DataService{
  
    private data: string[] = [];
      
    getData(): string[] {
          
        return this.data;
    }
    addData(name: string){
          
        this.data.push(name);
    }
}