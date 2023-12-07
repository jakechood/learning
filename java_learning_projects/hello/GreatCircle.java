public class GreatCircle {
    public static void main(String[] args) {
        
        double x1 = Math.toRadians(Double.parseDouble(args[0]));
        double y1 = Math.toRadians(Double.parseDouble(args[1]));
        double x2 = Math.toRadians(Double.parseDouble(args[2]));
        double y2 = Math.toRadians(Double.parseDouble(args[3]));
        
        double r = 6371.0;
        double a = (x2 - x1) / 2;
        double b = (y2 - y1) / 2;
        double c = Math.sin(a) * Math.sin(a);
        double d = Math.cos(x1) * Math.cos(x2);
        double e = Math.sin(b) * Math.sin(b);

        double distance = (2 * r) * Math.asin(Math.sqrt(c + d * e));
        System.out.println(distance + " kilometers");
    }

}
