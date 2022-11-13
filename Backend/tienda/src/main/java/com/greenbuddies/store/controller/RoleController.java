package com.greenbuddies.store.controller;

import com.greenbuddies.store.exceptions.BadRequestException;
import com.greenbuddies.store.model.Role;
import com.greenbuddies.store.model.RoleName;
import com.greenbuddies.store.service.RoleService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@ControllerAdvice
@RestController
@RequestMapping("/roles")
public class RoleController {

    private final Logger LOGGER = LoggerFactory.getLogger(String.valueOf(RoleController.class));

    @Autowired
    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    /* Methods */
    /* GET */

    @ApiOperation(value = "Search by Id in Roles entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Role.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping("id/{id}")
    public Role findById(@PathVariable Long id) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Search by Id in Roles entity");
        }
        return roleService.findById(id).orElse(null);
    }


    @ApiOperation(value = "List of all Roles"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Role.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    @GetMapping()
    public List<Role> findAll() {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all Receipts");
        }
        return roleService.findAll();
    }

    @ApiOperation(value = "Find by cart Id in Roles entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Role.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("name/{roleName}")
    public Optional<Role> findRoleByName(@PathVariable RoleName roleName) {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("List of all Roles by role name");
        }
        return roleService.findRoleByName(roleName);
    }


    /* POST */

    @ApiOperation(value = "Insertion of a new registry in Roles entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Role.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping("/save")
    public ResponseEntity<Role> save(@RequestBody Role role) {
        ResponseEntity<Role> resp;
        if (roleService.findById(role.getId()).isPresent()) {
            resp = new ResponseEntity("The role already exists!", HttpStatus.CONFLICT);

        } else {
            resp = new ResponseEntity<>(roleService.save(role), HttpStatus.CREATED);
        }
        return resp;
    }


    /* PUT */
    @ApiOperation(value = "Update by id of a record in Roles entity"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Role.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Role> update(@RequestBody Role newRole) throws BadRequestException {
        ResponseEntity<Role> resp;

        if (roleService.findById(newRole.getId()).isPresent()) {
            resp = new ResponseEntity<>(roleService.update(newRole), HttpStatus.OK);

        } else {
            resp = new ResponseEntity("Role not found!", HttpStatus.NOT_FOUND);

        }
        return resp;
    }


    /* DELETE */
    @ApiOperation(value = "Deletion of a record in Roles entity by id"
            , notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = Role.class),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error")})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        ResponseEntity<String> resp;

        if (roleService.findById(id).isPresent()) {
            roleService.delete(id);
            resp = new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            resp = new ResponseEntity<>("Role not found!", HttpStatus.NOT_FOUND);
        }
        return resp;
    }
}
