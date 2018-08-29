package domain;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;

import domain.Doctor;

public class DoctorTest {
    Doctor doctor;

    @Before
    public void setUp(){
        doctor = new Doctor();
    }

    @Test
    public void especialityTest(){
        String especiality = "Urologist";
        Speciality s = new Speciality();
        s.setName(especiality);
        doctor.setSpecialty(s);
        Assert.assertEquals(especiality, doctor.getSpecialty().getName());
    }

    @Test
    public void idTest(){
        String id = "1";
        doctor.setId(id);
        Assert.assertEquals(id, doctor.getId());
    }

    @Test
    public void crmTest(){
        String crm = "123-sc";
        doctor.setCrm(crm);
        Assert.assertEquals(crm, doctor.getCrm());
    }

    @Test
    public void doctorsNameTest(){
        String name = "joao";
        doctor.setName(name);
        Assert.assertEquals(name, doctor.getName());
    }
    
    @Test
    public void appointmentTest(){
        String date = "2017-09-19";
        String hour = "17:00";
        
        Appointment a = new Appointment();
        a.setDate(date);
        a.setHour(hour);
        
        List<Appointment> appList = new ArrayList<Appointment>();
        appList.add(a);
        doctor.setAppointment(appList);
        
        Assert.assertEquals(date, doctor.getAppointment().get(0).getDate());
    }
}
