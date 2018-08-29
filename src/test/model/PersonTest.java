package domain;

import domain.Person;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PersonTest {

    Person person;

    @Before
    public void setUp(){
        person = new Person();
    }

    @Test
    public void NameTest(){
        String name = "name";
        person.setName(name);
        assertEquals(name, person.getName());
    }

    @Test
    public void CPFTest(){
        String cpf = "001.0001.001-89";
        person.setCpf(cpf);
        assertEquals(cpf, person.getCpf());
    }

    @Test
    public void ageTest(){
        Integer age = new Integer (25);
        person.setAge(age);
        assertEquals(age, person.getAge());
    }

    @Test
    public void emailTest(){
        String email = "email@email.com";
        person.setEmail(email);
        assertEquals(email, person.getEmail());
    }

    @Test
    public void phoneTest(){
        String phone = "481234546";
        person.setPhone(phone);
        assertEquals(phone, person.getPhone());
    }

    @Test
    public void cellPhoneTest(){
        String phone = "481234546";
        person.setCellphone(phone);
        assertEquals(phone, person.getCellphone());
    }
}
