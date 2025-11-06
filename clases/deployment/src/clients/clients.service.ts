import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import IORedis from 'ioredis';
import { CLIENT_FIND_ALL_KEY } from 'src/redis/constants/ClientsKeys';
import { REDIS_KEY, REDIS_TTL } from 'src/redis/constants/RedisKey';
@Injectable()
export class ClientsService {
  constructor(
    /**
     * Inject Cache Manager
     */
    @Inject(REDIS_KEY)
    private readonly cacheManager: IORedis,
  ) {}

  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  async findAll() {
    const clientsCached = await this.cacheManager.get(CLIENT_FIND_ALL_KEY);

    console.log('📝 La información se consulto de la Cache');
    if (clientsCached) return JSON.parse(clientsCached);

    // Conexión con DB
    const clients = [
      {
        id: 1,
        name: 'Yuleibis Maria',
        email: 'yuleibis.maria@gmail.com',
        phone: 3125684785,
        address: 'Calle 123, Piso 1, Ciudad de México, CDMX',
        createdAt: new Date(),
      },
      {
        id: 2,
        name: 'Monica Patricia',
        email: 'monica.patricia@gmail.com',
        phone: 3125684785,
        address: 'Calle 123, Piso 1, Ciudad de México, CDMX',
        createdAt: new Date(),
      },
    ];

    console.log('🏗 La información se consulto de la DB');
    this.cacheManager.set(
      CLIENT_FIND_ALL_KEY,
      JSON.stringify(clients),
      'EX',
      REDIS_TTL,
    );
    return clients;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
