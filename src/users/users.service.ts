import { Injectable ,HttpException,HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { InfoUserEntity } from 'src/info-user/info-user.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(InfoUserEntity) private profileRepository: Repository<InfoUserEntity>
        ) {};
    createUser(user: CreateUserDto ){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }
    
    getUsers(){
        return this.userRepository.find();
    }

    getUserByID(id:number){
         return this.userRepository.findOne({
                where:{
                    id,
                },
            });
    }

    deleteUser(id: number){
        this.userRepository.delete({ id  });
    }

    updateUser(id:number,user:updateUserDto){
        return this.userRepository.update({ id } , user);
    }

    async createProfile(id:number, profile:CreateProfileDto){
        const userFound = await this.userRepository.findOne({where: {
            id,
        },
    });

    if(!userFound) {
        return new HttpException('Usuario no encontrado',HttpStatus.NOT_FOUND);
    }

    const newProfile= this.profileRepository.create(profile);
    const saveProfile= await this.profileRepository.save(newProfile);
    console.log(userFound);
    //userFound.profile=newProfile;
    console.log(saveProfile);
    return this.userRepository.update({ id },userFound);
    }
}
