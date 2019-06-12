import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        try {
            for (int i = 0; i < n; i++) {
                int start = scan.nextInt();
                int end = scan.nextInt();
                // System.out.println(System.currentTimeMillis());

                boolean[] flag = getPrimeBooleans();
                //System.out.println(System.currentTimeMillis());
                findPrime(start, end, flag);
                //System.out.println(System.currentTimeMillis());
            }
        } catch (Exception e) {
            e.printStackTrace();

        }
    }

    public static void findPrime(int start, int end, boolean[] flag) {


        for (int i = start; i <= end; i++) {
            if (flag[i]) {
                System.out.println(i);
            }

        }
    }

    private static boolean[] getPrimeBooleans() {
        boolean flag[] = new boolean[10000001];
        flag[0] = true;
        flag[1] = true;
        flag[2] = true;
        for (int i = 3; i < flag.length; i = i + 2) {
            flag[i] = true;
        }

        for (int i = 3; i * i <= 10000000; i++) {

            if (flag[i]) {
                for (int j = i * i; j <= 10000000; j = j + i) {
                    flag[j] = false;
                }
            }
        }
        return flag;
    }
}


