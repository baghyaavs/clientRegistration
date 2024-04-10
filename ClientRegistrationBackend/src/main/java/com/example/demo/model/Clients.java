package com.example.demo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "clients")
public class Clients {
	
	@Id
	@GeneratedValue
	private Long clientno;
	private String client_Name;
	private String industry;
	private String service_looking;
	private String service_req;
	private String when_req;
	@Column(length = 1000)
	private String description;
	
	public String getClient_Name() {
		return client_Name;
	}
	public void setClient_Name(String client_Name) {
		this.client_Name = client_Name;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getService_looking() {
		return service_looking;
	}
	public void setService_looking(String service_looking) {
		this.service_looking = service_looking;
	}
	public String getService_req() {
		return service_req;
	}
	public void setService_req(String service_req) {
		this.service_req = service_req;
	}
	public String getWhen_req() {
		return when_req;
	}
	public void setWhen_req(String when_req) {
		this.when_req = when_req;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	

}
