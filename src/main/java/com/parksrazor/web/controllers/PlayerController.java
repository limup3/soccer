package com.parksrazor.web.controllers;

import com.parksrazor.web.domains.PlayerDTO;
import com.parksrazor.web.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/players")
public class PlayerController {
    @Autowired PlayerService playerService;
    @Autowired PlayerDTO player;
    @GetMapping("")
    public List<PlayerDTO> getlist(){

        return playerService.retrieveAll();
        
    }
    @PostMapping("/{playerId}/access")
    public Map<String, Object> login(
            @PathVariable String playerId,
            @RequestBody PlayerDTO params) {
        Map<String,Object> map = new HashMap<>();
        player = playerService.login(params);
        if(player != null){
            System.out.println("로그인정보" + player.toString());
            map.put("result", true);
        }else{
            map.put("result", false);
        }
        System.out.println("아이디" + player.toString());
        System.out.println("비밀번호" + params.getBackNo());



        map.put("player",player);
        return map;
    }
}
