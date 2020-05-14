package com.parksrazor.web.controllers;

import com.parksrazor.web.domains.PlayerDTO;
import com.parksrazor.web.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/players")
public class PlayerController {
    @Autowired PlayerService playerService;

    @GetMapping("")
    public List<PlayerDTO> getlist(){

        return playerService.retrieveAll();
        
    }
}
