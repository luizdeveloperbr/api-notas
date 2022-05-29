import z from 'zod';

export const NotaModel = z.object({
  id: z.string(),
  dataSaida: z
    .date()
    .or(
      z
        .string()
        .regex(/\d{4}(.\d{2}){2}(\s|T)(\d{2}.){2}\d{2}/g, {
          message: 'inserir DateTime no formato ISO 8601',
        }),
    )
    .optional(),
  dataRetorno: z
    .date()
    .or(
      z
        .string()
        .regex(/\d{4}(.\d{2}){2}(\s|T)(\d{2}.){2}\d{2}/g, {
          message: 'inserir DateTime no formato ISO 8601',
        }),
    )
    .optional(),
});
