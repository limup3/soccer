package com.parksrazor.web.services;

import com.parksrazor.web.domains.PlayerDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface PlayerService {
    public List<PlayerDTO> retrieveAll();
}
