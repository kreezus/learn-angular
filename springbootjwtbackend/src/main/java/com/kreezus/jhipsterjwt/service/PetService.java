package com.kreezus.jhipsterjwt.service;

import com.kreezus.jhipsterjwt.domain.Pet;
import com.kreezus.jhipsterjwt.repository.PetRepository;
import com.kreezus.jhipsterjwt.service.dto.PetDTO;
import com.kreezus.jhipsterjwt.service.mapper.PetMapper;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Pet}.
 */
@Service
@Transactional
public class PetService {

    private final Logger log = LoggerFactory.getLogger(PetService.class);

    private final PetRepository petRepository;

    private final PetMapper petMapper;

    public PetService(PetRepository petRepository, PetMapper petMapper) {
        this.petRepository = petRepository;
        this.petMapper = petMapper;
    }

    /**
     * Save a pet.
     *
     * @param petDTO the entity to save.
     * @return the persisted entity.
     */
    public PetDTO save(PetDTO petDTO) {
        log.debug("Request to save Pet : {}", petDTO);
        Pet pet = petMapper.toEntity(petDTO);
        pet = petRepository.save(pet);
        return petMapper.toDto(pet);
    }

    /**
     * Partially update a pet.
     *
     * @param petDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<PetDTO> partialUpdate(PetDTO petDTO) {
        log.debug("Request to partially update Pet : {}", petDTO);

        return petRepository
            .findById(petDTO.getId())
            .map(
                existingPet -> {
                    petMapper.partialUpdate(existingPet, petDTO);
                    return existingPet;
                }
            )
            .map(petRepository::save)
            .map(petMapper::toDto);
    }

    /**
     * Get all the pets.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<PetDTO> findAll() {
        log.debug("Request to get all Pets");
        return petRepository.findAll().stream().map(petMapper::toDto).collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one pet by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<PetDTO> findOne(Long id) {
        log.debug("Request to get Pet : {}", id);
        return petRepository.findById(id).map(petMapper::toDto);
    }

    /**
     * Delete the pet by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Pet : {}", id);
        petRepository.deleteById(id);
    }
}
