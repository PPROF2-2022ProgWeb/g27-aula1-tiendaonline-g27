package com.greenbuddies.store.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "zip_code")
public class ZipCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "zip_code_id")
    private Long id;

    private String code;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ZipCode zipCode = (ZipCode) o;
        return id != null && Objects.equals(id, zipCode.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
