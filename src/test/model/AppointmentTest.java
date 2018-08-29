package domain;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

public class AppointmentTest {
	Appointment app;
	
	@Before
	public void setUp(){
		app = new Appointment();
	}
	
	@Test
    public void dateTest(){
        String date = "2017-09-19";
        app.setDate(date);
        assertEquals(date, app.getDate());
    }
	
	@Test
    public void hourTest(){
        String hour = "17:00";
        app.setHour(hour);
        assertEquals(hour, app.getHour());
    }
}
