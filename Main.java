class Table {
    // synchronized: only one thread can run this at a time per Table object
     synchronized static void printTable(int n) {
   for (int j = 1; j <= 10; j++) {
            System.out.println("Thread " + Thread.currentThread().getName() + " " + (n * j));
        
        }
      
    }
}

class MyThread extends Thread {
    Table t;
    MyThread(Table t) { this.t = t; }

    public void run() {
        Table.printTable(5);
    }
}

class MyThread2 extends Thread {
    Table t;
    MyThread2(Table t) { this.t = t; }

    public void run() {
        Table.printTable(10);
    }
}

public class Main {
    public static void main(String[] args) {
        Table obj = new Table();          // ONE shared object
        MyThread t1 = new MyThread(obj);
        MyThread2 t2 = new MyThread2(obj);
        t1.start();

        t2.start();
        System.out.println("Thread 1 is alive: " + t1.isAlive());
    }
}