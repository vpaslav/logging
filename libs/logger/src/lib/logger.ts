import * as winston from "winston";

export const logger = winston.createLogger({
  level: "debug",
  // JSON formatting better fits structural logging requirements, also, timestamp is very useful
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  
  // Within Kubernetes console logs will be exported to a GCP, so, it's enough.
  transports: new winston.transports.Console(),
  
  // By default we need only "environment" tag, the rest tags can be added later in a specific service
  // However, we are not limited by just this tag we can add more if that's helps making application better
  defaultMeta: {
    environment: "development",
  },
});
