package org.svcet.fittr.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "bmi_history")
public class BMIHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Float bmi;

    private Float height;

    private Float weight;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // getters & setters
}
