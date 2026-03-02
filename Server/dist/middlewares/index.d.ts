import type { Request, Response, NextFunction } from 'express';
export declare const loggerMiddleware: (req: Request, _res: Response, next: NextFunction) => void;
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export declare const errorHandler: (err: Error, _req: Request, res: Response, _next: NextFunction) => void;
export declare const notFoundHandler: (_req: Request, res: Response) => void;
//# sourceMappingURL=index.d.ts.map