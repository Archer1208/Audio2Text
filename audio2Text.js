import { whisper } from "whisper-node";

const filePath = "./audio/audio.wav"; // required

const options = {
  modelName: "small", // default
  // modelPath: "/custom/path/to/model.bin", // use model in a custom directory (cannot use along with 'modelName')
  whisperOptions: {
    language: "auto", // default (use 'auto' for auto detect)
    gen_file_txt: true, // outputs .txt file
    gen_file_subtitle: true, // outputs .srt file
    gen_file_vtt: false, // outputs .vtt file
    word_timestamps: false, // timestamp for every word
    // timestamp_size: 0      // cannot use along with word_timestamps:true
  },
};

const transcript = await whisper(filePath, options);
