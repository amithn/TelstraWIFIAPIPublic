package pas.au.pivotal.pws.api.telstrawifi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class HotspotGetterMain {

	public static void main(String[] args) throws IOException {

		System.out.println(Utils.getHotspots("-37.8182668" ,"144.9648731", "100", false));
		System.out.println(Utils.getHotspots("-37.8094526","144.9689562", "100"));
	}
}
