package com.parksrazor.web.mappers;

import com.parksrazor.web.domains.PlayerDTO;
import lombok.Data;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Data
public interface PlayerMapper {
    public List<PlayerDTO> selectAll();
}
