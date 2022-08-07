package com.greenbuddies.store.model;


import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "detail")
public class Detail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "idDetail")
    private Long id;
    private String description;


/*
    @ManyToMany(mappedBy = "details")
    @ToString.Exclude
    private List<Product> products = new ArrayList<>();
*/
}
