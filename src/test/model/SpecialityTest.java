package domain;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

public class SpecialityTest {
	Speciality speciality;

	@Before
	public void setUp() {
		speciality = new Speciality();
	}

	@Test
	public void nameTest() {
		String name = "Urologist";
		speciality.setName(name);
		assertEquals(name, speciality.getName());
	}

	@Test
	public void idTest() {
		String id = "1";
		speciality.setId(id);
		assertEquals(id, speciality.getId());
	}
}
