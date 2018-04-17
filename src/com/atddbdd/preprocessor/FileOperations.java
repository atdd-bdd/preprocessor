package com.atddbdd.preprocessor;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;


public class FileOperations {

	public static boolean writeInclude(Pathname filename, String arg1) {
		File out = new File(Configuration.relativeIncludeDirectory.add(filename).toString()); 
		out.getParentFile().mkdirs(); 
		return write(out, arg1); 
	}
	public static String readInclude(Pathname filename) {
		File in = new File(Configuration.relativeIncludeDirectory.add(filename).toString()); 	
		return read(in); 
	}
	
	public static boolean writeNoPath(Pathname filename, String arg1) {
		File out = new File(filename.toString()); 
		out.getParentFile().mkdirs(); 
		return write(out, arg1); 
	}
	public static String readNoPath(Pathname filename) {
		File in = new File(filename.toString()); 	
		return read(in); 
	}
	public static boolean existsFeatureOut(Pathname path) {
		File out = new File(Configuration.outputFeaturePath.add(path).toString()); 
		return out.exists(); 
	}
	public static boolean writeFeatureOut(Pathname filename, String arg1) {
		File out = new File(Configuration.outputFeaturePath.add(filename).toString()); 
		out.getParentFile().mkdirs(); 
		return write(out, arg1); 
	}
/* Not used at this time
	public static String readFeatureIn(Pathname filename) {
		File in = new File(Configuration.inputFeaturePath.add(filename).toString()); 	
		return read(in); 
	}
*/ 
	public static String readFeatureOut(Pathname filename) {
		File in = new File(Configuration.outputFeaturePath.add(filename).toString()); 	
		return read(in); 
	}
	public static boolean writeFeatureIn(Pathname filename, String arg1) {
		File out = new File(Configuration.relativeIncludeDirectory.add(filename).toString()); 	
		return write(out, arg1); 
	}
	public static boolean write(File file, String arg1) {
		try {
			OutputStream os;
			os = new FileOutputStream(file);
			os.write(arg1.getBytes(Configuration.charset)); 
			os.close();
			return true;
		} 
		catch (IOException e) {
			// TODO Auto-generated catch block
			Logging.error(ErrorStrings.UNABLE_TO_WRITE_TO + file.getAbsolutePath()+ " "+ e.getMessage());
			return false; 
		} 	}
	public static String read(File file) {
		int MAX_SIZE = 1000000; 
		try {
			InputStream os;
			os = new FileInputStream(file);
			byte [] all = new byte[MAX_SIZE]; 
			int count = os.read(all); 
			if (count >= MAX_SIZE)
				Logging.error(ErrorStrings.MAX_INPUT_FILE_EXCEEDED + MAX_SIZE); 
			os.close();
			return new String(all, 0, count, Configuration.charset); 
		}

		catch (IOException e) {
			Logging.error(ErrorStrings.UNABLE_TO_READ + file.getAbsolutePath() + " " + e.getMessage());
			return ErrorStrings.CANNOT_READ_FILE; 
		} 
	}
	public static boolean deleteDirectory(Pathname path) {
		return deleteDirectory(new File(path.toString())); 
	}
	public static boolean deleteDirectory(File directory) {
	    if(directory.exists()){
	        File[] files = directory.listFiles();
	        if(files != null){
	            for(File f: files) {
	                if(f.isDirectory()) {
	                    deleteDirectory(f);
	                }
	                else {
	                    f.delete();
	                }
	            }
	        }
	    }
	    return(directory.delete());
	}
}
