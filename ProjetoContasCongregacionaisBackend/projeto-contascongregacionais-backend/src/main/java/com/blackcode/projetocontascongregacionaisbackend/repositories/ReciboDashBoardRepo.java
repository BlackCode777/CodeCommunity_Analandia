package com.blackcode.projetocontascongregacionaisbackend.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.blackcode.projetocontascongregacionaisbackend.model.ReciboDashboardClasse;

public interface ReciboDashBoardRepo extends MongoRepository<ReciboDashboardClasse, ObjectId> {

}
