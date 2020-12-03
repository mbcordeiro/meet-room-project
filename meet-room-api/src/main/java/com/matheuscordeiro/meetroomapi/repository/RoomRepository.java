package com.matheuscordeiro.meetroomapi.repository;

import com.matheuscordeiro.meetroomapi.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
