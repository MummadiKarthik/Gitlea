class Table{
    int i;

    Table(int i){
        this.i = i;
    }
    public void printTable(){
        for(int j=1; j<=10; j++){
            System.out.println("Thread "+Thread.currentThread().getName()+" "+ (i*j));
        }
    }
}
class MyThread extends Thread{
    Table t;
    MyThread(Table t){
        this.t = t;
    }
    public void run(){
        
            t.printTable();
        
    }
}

class MyThread2 extends Thread{
    Table t;
    MyThread2(Table t){
        this.t = t;
    }
    public void run(){
        
            t.printTable();
        
    }
}

class Main{
    public static void main(String args[]){
        Table t1 = new Table(5);
        Table t2 = new Table(10);
        MyThread t = new MyThread(t1);
        MyThread2 t3 = new MyThread2(t2);
        t.start();
        t3.start();
    }
}