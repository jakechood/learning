public class HelloGoodbye {
    
    public static void main(String[] args) {
        String b = args[0];
        String d = args[1];
        String a, c, e, f;
        a = "Hello ";
        c = " and ";
        e = ".";
        f = "Goodbye ";
        
        System.out.println(a + b + c + d + e);
        System.out.println(f + d + c + b + e);
    }
}