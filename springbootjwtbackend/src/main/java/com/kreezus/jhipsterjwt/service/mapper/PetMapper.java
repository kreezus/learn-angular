package com.kreezus.jhipsterjwt.service.mapper;

import com.kreezus.jhipsterjwt.domain.*;
import com.kreezus.jhipsterjwt.service.dto.PetDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Pet} and its DTO {@link PetDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PetMapper extends EntityMapper<PetDTO, Pet> {}
