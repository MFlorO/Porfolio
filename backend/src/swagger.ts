import { CONFIG } from "./env";
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Documentación de API - Encuestas',
    version: '1.0.0',
    description: 'API para la gestión de encuestas',
  },
  servers: [
    {
      url: `http://localhost:${CONFIG.PORT || 3001}`,
    },
  ],
  components: {
    schemas: {
      Survey: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          title: { type: 'string', example: "Encuesta de satisfacción" },
          description: { type: 'string', example: "Queremos saber tu opinión" },
          status: { type: 'string', enum: ['DRAFT', 'PUBLISHED'], example: 'DRAFT' },
          isEnable: { type: 'boolean', example: true },
          createdAt: { type: 'string', format: 'date-time', example: "2023-08-01T12:00:00Z" },
          updatedAt: { type: 'string', format: 'date-time', example: "2023-08-02T15:30:00Z" },
          sections: {
            type: 'array',
            items: { $ref: '#/components/schemas/Section' }
          }
        }
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.ts'], 
};

export const swaggerSpec = swaggerJSDoc(options);
