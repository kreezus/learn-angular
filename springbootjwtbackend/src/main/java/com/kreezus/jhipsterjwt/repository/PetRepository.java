package com.kreezus.jhipsterjwt.repository;

import com.kreezus.jhipsterjwt.domain.Pet;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Pet entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {}
