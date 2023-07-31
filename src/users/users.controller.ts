import { Controller,Get,Post,Body,Param,ParseIntPipe, Delete,Patch,Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { updateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body() newUser:CreateUserDto){
        return this.usersService.createUser(newUser)
    }

    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserByID(@Param('id', ParseIntPipe ) id:number ) : Promise<User>{
        console.log(id);
        console.log(typeof id);
        return this.usersService.getUserByID(id);

    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number ) {
        return this.usersService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(
        @Param('id',ParseIntPipe) id: number,
        @Body()
        user: updateUserDto,
    ) {
        return this.usersService.updateUser(id,user);
    }

    @Put(':id')
    updateUserP(
        @Param('id',ParseIntPipe) id: number,
        @Body()
        user: updateUserDto,
    ) {
        return this.usersService.updateUser(id,user);
    }

    @Post(':id/profile')
    createProfile(
        @Param('id',ParseIntPipe) id:number,
        @Body() profile: CreateProfileDto,
    ){
        return this.usersService.createProfile(id,profile);
    }


}
