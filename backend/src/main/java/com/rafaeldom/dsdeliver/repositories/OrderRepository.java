package com.rafaeldom.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaeldom.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
