package domain;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import domain.Doctor;
import domain.HeathInsurance;

public class HeathInsuranceTest {
	HeathInsurance hi;

	@Before
	public void setUp() {
		hi = new HeathInsurance();
	}
	
	@Test
	public void idTest() {
		String id = "1";
		hi.setId(id);
		assertEquals(id, hi.getId());
	}

	@Test
	public void nameTest() {
		String name = "Unimed";
		hi.setName(name);
		assertEquals(name, hi.getName());
	}
	
	@Test
	public void discountTest() {
		Double discount = 0.2;
		hi.setDiscount(discount);
		assertEquals(discount, hi.getDiscount());
	}
	
	@Test
	public void doctoListTest() {
		Doctor doctor = new Doctor();
		doctor.setName("John");
		doctor.setId("1");
		List<Doctor> doctorList = new ArrayList();
		doctorList.add(doctor);
		
		hi.setDoctorList(doctorList);
		assertEquals("John", hi.getDoctorList().get(0).getName());
	}
}
